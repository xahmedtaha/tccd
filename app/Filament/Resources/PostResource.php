<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Models\Post;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $slug = 'posts';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?string $navigationIcon = 'heroicon-o-pencil-square';

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
                                                ->required()
                                                ->reactive()
                                                ->lazy()
                                                ->afterStateUpdated(fn($state, callable $set) => $set('slug', Str::slug($state))),
                                            TextInput::make('slug')
                                                ->disabled()
                                                ->dehydrated()
                                                ->required()
                                                ->unique(Post::class, 'slug', fn($record) => $record),
                                        ]),

                                    RichEditor::make('content'),
                                ]),
                        ])->columnSpan(2),
                        Group::make([
                            Section::make()
                                ->schema([
                                    Placeholder::make('created_at')
                                        ->label('Created Date')
                                        ->content(fn(?Post $record): string => $record?->created_at?->diffForHumans() ?? '-'),

                                    Placeholder::make('updated_at')
                                        ->label('Last Modified Date')
                                        ->content(fn(?Post $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
                                ]),
                            Section::make()
                                ->schema([
                                    Select::make('post_category_id')
                                        ->relationship('category', 'name')
                                        ->preload()
                                        ->searchable()
                                        ->createOptionForm([
                                            Grid::make()
                                                ->schema([
                                                    TextInput::make('name')
                                                        ->required()
                                                        ->reactive()
                                                        ->lazy()
                                                        ->afterStateUpdated(fn($state, callable $set) => $set('slug', Str::slug($state))),
                                                    TextInput::make('slug')
                                                        ->disabled()
                                                        ->dehydrated()
                                                        ->required()
                                                        ->unique(Post::class, 'slug', fn($record) => $record),
                                                ]),
                                        ]),
                                    DatePicker::make('published_at')
                                        ->nullable()
                                        ->minDate(now())
                                        ->label('Published Date')
                                        ->helperText('Leave empty to publish immediately'),
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

                TextColumn::make('slug')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category.name'),

                TextColumn::make('is_published')
                    ->badge()
                    ->color(fn (bool $state): string => match ($state) {
                        false => 'gray',
                        true => 'success',
                    })
                    ->label('Status')
                    ->formatStateUsing(fn ($state) => $state ? 'Published' : 'Unpublished')
                    ->sortable(),

                TextColumn::make('published_at')
                    ->label('Published Date')
                    ->getStateUsing(fn (Post $record) => $record->published_at ?? $record->created_at)
                    ->date(),
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
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'slug'];
    }
}
