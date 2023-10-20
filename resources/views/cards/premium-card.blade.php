<div class="p-4 bg-base-200 flex flex-col items-center justify-center gap-7">
    <div class="text-2xl font-medium">{{ $card->material }} {{ $card->type }} Card</div>

    <div class="flex w-96 h-52 rounded-lg shadow-lg items-center justify-center bg-white relative">
        <div class="text-center">
            <div class="text-primary font-medium">
                {{ $card->name }}
            </div>
            <div class="lg:text-sm text-xs">
                {{ $card->title }}
            </div>
        </div>
        <span class="absolute right-2 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M7.24 2c-1.64 0-3.28 0-3.69.04c-.88.05-1.47.69-1.51 1.52c-.04.81-.04 16.03 0 16.85c.05.82.67 1.45 1.51 1.5c.91.05 3.89.06 4.74.06c-1.53-1.06-1.74-3.05-1.88-6.74c-.08-2.19-.01-9.87 0-10.19l.04-2.1L14.5 11v2.5L8.09 7.11c-.01 1.27-.03 2.92-.03 4.43c0 1.46.02 2.8.06 3.51c.24 4.02.62 5.91 2.71 6.65c.67.23 1.24.3 2.24.3c.82 0 6.56 0 7.38-.04c.88-.05 1.48-.69 1.52-1.52c.03-.81.03-15.99 0-16.82c-.06-.82-.68-1.44-1.52-1.49c-.91-.05-3.88-.1-4.74-.1c1.53 1.06 1.73 3.05 1.88 6.75c.08 2.19.01 9.86 0 10.19l-.04 2.09L9.53 13v-2.5l6.38 6.39c.01-1.27.03-2.92.03-4.43c0-1.46-.02-2.8-.06-3.5c-.24-4.03-.62-5.92-2.71-6.66c-.64-.23-1.24-.3-2.24-.3H7.24Z" />
            </svg>
        </span>
    </div>

</div>
