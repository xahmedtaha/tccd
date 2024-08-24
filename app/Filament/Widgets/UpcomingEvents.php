<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class UpcomingEvents extends BaseWidget
{
    protected static ?int $sort = 2;
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Event::query()->latest()->whereNotNull('starts_at')->where('starts_at', '>', now()),
            )
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('sponsors_count')
                    ->counts('sponsors')
                    ->label('Sponsors'),
                TextColumn::make('participants_count')
                    ->counts('participants')
                    ->label('Participants'),
                TextColumn::make('starts_at')
                    ->dateTime(),
            ]);
    }
}
