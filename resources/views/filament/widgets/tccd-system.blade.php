<x-filament-widgets::widget class="fi-account-widget">
    <x-filament::section>
        <div class="flex items-center gap-x-3">
            <img class="w-20" src="{{ \Filament\Facades\Filament::getBrandLogo() }}" alt="{{ config('app.name') }}">

            <div class="flex-1">
                <h2
                    class="grid flex-1 text-base font-semibold leading-6 text-gray-950 dark:text-white"
                >
                    System
                </h2>

                <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is a demo version intended as a task submission.
                </p>
            </div>

            <div class="flex flex-col gap-y-1 ml-6">
                <x-filament::link
                    color="primary"
                    href="{{url('/docs/api')}}"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    API Docs
                </x-filament::link>

                <x-filament::link
                    color="primary"
                    href="{{url('/docs/erd')}}"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    DB ERD
                </x-filament::link>
            </div>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
