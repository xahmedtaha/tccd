<?php

namespace App\Filament\Widgets;

use App\Models\Sponsor;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestSponsors extends BaseWidget
{
    protected static ?int $sort = 3;
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Sponsor::query()->latest(),
            )
            ->columns([
                ImageColumn::make('logo_path')
                    ->label('Logo'),
                TextColumn::make('name'),
                TextColumn::make('created_at')
                    ->label('Added at')
                    ->date(),
            ]);
    }
}
