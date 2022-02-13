const heroes = {
    name : 'Spiderman',
    friends : ['Superman','Batman'],
}

heroes['power'] = 'spider-web'

delete(heroes.friends)

for (const key of Object.keys(heroes)) {
    const val = heroes[key]
    console.log(val);
}
// console.log(heroes)
