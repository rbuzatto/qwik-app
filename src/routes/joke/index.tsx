import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

type Response = {
    id: string
    status: number
    joke: string
}

export const useDadJoke = routeLoader$(async () => {
    const response = await fetch(
        'https://icanhazdadjoke.com/',
        { headers: { Accept: 'application/json' } },
    )

    return (await response.json()) as Response

})

export default component$(() => {
    const { value: { joke } } = useDadJoke()

    return <section>{joke}</section>
})
