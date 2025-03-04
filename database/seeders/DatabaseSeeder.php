<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Projects;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'name' => 'Bilal',
            'email' => 'bilalmuhammadyousuf543@gmail.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => time()
        ]);

        // Create 30 project records in which each of them have 30 task.
        Projects::factory()->count(30)->hasTasks(30)->create();
    }
}
