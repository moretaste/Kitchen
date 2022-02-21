import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => {
        return {
            Recipes: [
                {
                    id: 1,
                    title: 'Nachos con queso',
                    description: 'Finger picking good nachos',
                    image: 'https://loremflickr.com/600/600/foodart?random=1'
                },
                {
                    id: 2,
                    title: 'Tortilla de Almeria',
                    description: 'Con chorizo y cebolla',
                    image: 'https://loremflickr.com/600/600/foodart?random=2'
                }
            ],
            count: 0
        }
    },
    actions: {
        increment() {
            setInterval(() => {
            this.count++
            }, 1000)
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    }
})