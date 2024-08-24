<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use App\Models\Participant;
use App\Models\Sponsor;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        return [
            Stat::make('Upcoming Events', Event::whereNotNull('starts_at')->where('starts_at', '>', now())->count())
                ->icon('heroicon-o-calendar'),
            Stat::make('All Sponsors', Sponsor::count())
                ->icon('heroicon-o-star'),
            Stat::make('All Participants', Participant::count())
                ->icon('heroicon-o-user-group'),
        ];
    }
}
