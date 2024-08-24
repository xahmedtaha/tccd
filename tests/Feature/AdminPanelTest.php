<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminPanelTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $superAdmin = User::factory()->create();

        Artisan::call('shield:super-admin', ['--user' => $superAdmin->id]);

        $this->actingAs($superAdmin);
    }

    public function test_can_access_admin_panel()
    {
        $response = $this->get(route('filament.admin.pages.dashboard'));

        $response->assertStatus(200);
    }
}
