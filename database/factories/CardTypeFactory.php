<?php

namespace Database\Factories;

use App\CardType\CustomCard;
use App\CardType\PremiumCard;
use App\CardType\StandardCard;
use App\Contracts\CardType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CardTypeFactory extends Factory
{


    public static function makeCard(string $type, $payload): CardType
    {

        if (is_string($payload)) $payload = (array) json_decode($payload);

        if (!is_array($payload)) $payload = (array) $payload;

        switch ($type) {
            case 'standard':
                return new StandardCard($payload);
            case 'infinite':
                return new PremiumCard($payload);
            case 'custom':
                return new CustomCard($payload);
            default:
                throw new \InvalidArgumentException("Invalid card type: $type");
        }
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }
}
