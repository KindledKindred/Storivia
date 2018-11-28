<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(PasswordResetsSeeder::class);
        $this->call(ActionsTableSeeder::class);
        $this->call(ActionpanelsTableSeeder::class);
        $this->call(ScenesTableSeeder::class);
        $this->call(ScenepanelsTableSeeder::class);
        $this->call(CharactersTableSeeder::class);
        $this->call(ReflectionsTableSeeder::class);
        $this->call(NotesTableSeeder::class);
    }
}
