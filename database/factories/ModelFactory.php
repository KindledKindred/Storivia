<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        /*以降独自定義
        'user_id' => $faker->randomDigitNotNull,
        'character_id' => $faker->randomDigitNotNull,
        'role_id' => $faker->randomDigitNotNull,
        'scene_id' => $faker->randomDigitNotNull,
        'scenepanel_id' => $faker->randomDigitNotNull,
        'character_name' => $faker->name($gender = null|'male'|'female'),
        'character_sex' => $faker->title($gender = null|'male'|'female'),
        'character_age' => $faker->numberBetween($min = 0, $max = 99),
        'character_app' => $faker->text,
        'character_note' => $faker->text,
        'scene_note' => $faker->text,
        'scenepanel_note' => $faker->text,
        'light' => $faker->numberBetween($min = 1, $max = 5),
        'sound' => $faker->numberBetween($min = 1, $max = 5),
        'reflection_id' => $faker->randomDigitNotNull,
        'animation_id' => $faker->randomDigitNotNull,
        'reflection' => $faker->text,
        'note' => $faker->realText,
        */
    ];
});
