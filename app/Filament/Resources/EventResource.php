<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EventResource\Pages;
use App\Models\Event;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class EventResource extends Resource
{
    protected static ?string $model = Event::class;

    protected static ?string $slug = 'events';

    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';

    protected static ?string $navigationGroup = 'Events';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->schema([
                        Group::make([
                            Section::make()
                                ->schema([
                                    Grid::make()
                                        ->schema([
                                            TextInput::make('name')
                                                ->required(),
                                            DateTimePicker::make('starts_at')
                                                ->label('Start Date & Time')
                                                ->minDate(now())
                                                ->suffixIcon('heroicon-o-calendar')
                                                ->native(false),
                                        ]),

                                    RichEditor::make('description'),

                                    TextInput::make('address')
                                        ->suffixIcon('heroicon-o-map-pin'),
                                ]),
                            Tabs::make('Content')
                                ->hiddenOn('create')
                                ->tabs([
                                    Tabs\Tab::make('Resources')
                                        ->schema([
                                            Placeholder::make('resources_description')
                                                ->hiddenLabel()
                                                ->content('Here you can assign and keep track of any "resources" to events. Things like rooms, poster slots, etc...'),
                                            Repeater::make('resources')
                                                ->collapsible()
                                                ->hiddenLabel()
                                                ->relationship('resources')
                                                ->schema([
                                                    Select::make('resource_type_id')
                                                        ->label('Type')
                                                        ->preload()
                                                        ->searchable()
                                                        ->relationship('type', 'name')
                                                        ->required()
                                                        ->createOptionForm([
                                                            TextInput::make('name')
                                                                ->required(),
                                                        ]),
                                                    TextInput::make('amount')
                                                        ->minValue(0)
                                                        ->integer()
                                                        ->default(0),
                                                    Toggle::make('allocatable')
                                                        ->default(true),
                                                ]),
                                        ]),
                                    Tabs\Tab::make('Participants')
                                        ->schema([
                                            Placeholder::make('resources_description')
                                                ->hiddenLabel()
                                                ->content('Here you can add and manage the participants in the events. competitors, presenting teams, etc...'),
                                            Repeater::make('participants')
                                                ->collapsed()
                                                ->hiddenLabel()
                                                ->collapsible()
                                                ->relationship('participants')
                                                ->schema([
                                                    TextInput::make('name')
                                                        ->required(),
//                                                    Select::make('resources')
//                                                        ->preload()
//                                                        ->relationship(
//                                                            'resources',
//                                                            'resource_types.name'
//                                                        )
//                                                        ->multiple(),
                                                    RichEditor::make('description'),
                                                    FileUpload::make('logo_path')
                                                        ->label('Logo')
                                                        ->image()
                                                        ->imageEditor(),
                                                ])
                                                ->itemLabel(fn (array $state): ?string => $state['name'] ?? null),
                                        ]),
                                ]),
                        ])->columnSpan(2),
                        Group::make([
                            Section::make()
                                ->schema([
                                    Placeholder::make('created_at')
                                        ->label('Created Date')
                                        ->content(fn(?Event $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                                    Placeholder::make('updated_at')
                                        ->label('Last Modified Date')
                                        ->content(fn(?Event $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
                                ]),
                            Section::make()
                                ->schema([
                                    Select::make('sponsors')
                                        ->preload()
                                        ->searchable()
                                        ->relationship('sponsors', 'name')
                                        ->multiple()
                                        ->createOptionForm([
                                            TextInput::make('name')
                                                ->required(),
                                            RichEditor::make('description'),
                                            FileUpload::make('logo_path')
                                                ->label('Logo')
                                                ->image()
                                                ->imageEditor(),
                                        ]),
                                ]),
                        ])->columnSpan(1),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('sponsors_count')
                    ->counts('sponsors')
                    ->label('Sponsors')
                    ->sortable(),
                TextColumn::make('participants_count')
                    ->counts('participants')
                    ->label('Participants')
                    ->sortable(),

                TextColumn::make('address'),

                TextColumn::make('starts_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvents::route('/'),
            'create' => Pages\CreateEvent::route('/create'),
            'edit' => Pages\EditEvent::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name'];
    }
}
