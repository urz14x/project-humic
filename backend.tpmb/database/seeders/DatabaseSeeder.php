<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CategoryService;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                "service_name" => "Kehamilan",
                "slug" => "kehamilan",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Persalinan",
                "slug" => "persalinan",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Nifas",
                "slug" => "nifas",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Keluarga berencana",
                "slug" => "keluarga-berencana",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Kesehatan Reproduksi",
                "slug" => "kesehatan-reproduksi",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Balita tumbuh",
                "slug" => "balita-tumbuh",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Balita Kembang",
                "slug" => "balita-kembang",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
            [
                "service_name" => "Balita Mental Emosional",
                "slug" => "balita-mental-emosional",
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now()
            ],
        ];

        foreach ($categories as $category) {
            CategoryService::create($category);
        }

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
