import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = useLocation();
    return <div>

        <span class="text-5xl">Pokemon:</span>

    </div>
});