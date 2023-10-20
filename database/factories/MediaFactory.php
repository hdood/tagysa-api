<?php

namespace Database\Factories;

use App\Media\Image;
use App\Media\Pdf;
use App\Media\Video;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Media>
 */
class MediaFactory extends Factory
{
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

    public static function getFromType($type)
    {
        switch ($type) {
            case 'video':
                return new Video();
                break;
            case 'image':
                return new Image();
                break;

            case 'pdf':
                return new Pdf();
                break;
            default:
                throw new Exception("invalid media type");
                break;
        }
    }
}
