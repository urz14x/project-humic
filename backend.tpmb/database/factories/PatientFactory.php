<?php

namespace Database\Factories;

use App\Models\Midwife;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'midwife_id' => Midwife::factory(),
            'fullname' => fake()->name,
            'place_of_birth' => fake()->address,
            'date_of_birth' => "1984-02-14",
            'address' => fake()->address,
            'status' => "Menikah",
            'nik' => $this->faker->regexify('[A-Za-z0-9]{20}'),
            'no_rm' => $this->faker->regexify('[A-Za-z0-9]{20}')
        ];
    }
}
