<?php

namespace App\Filament\Resources\ResourceTypeResource\Pages;

use App\Filament\Resources\ResourceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageResourceTypes extends ManageRecords
{
    protected static string $resource = ResourceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
