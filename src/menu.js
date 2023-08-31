export function menu(content) {
    content.innerHTML = `
    <div class="container grid">
        <div class="element">
            <p>Molten War Torte</p>
            <div class="torte photo"></div>
            <p>Price: 75 gold coins</p>
        </div>
        <div class="element">
            <p>Artaeum Pickled Fish Bowl</p>
            <div class="fish photo"></div>
            <p>Price: 100 gold coins</p>
        </div>
        <div class="element">
            <p>Aetherial Ambrosia</p>
            <div class="ambrosia photo"></div>
            <p>Price: 125 gold coins</p>
        </div>
        <div class="element">
            <p>Betnikh Twice-Spiked Ale</p>
            <div class="ale photo"></div>
            <p>Price: 100 gold coins</p>
        </div>
        <div class="element">
            <p>Deregulated Mushroom Stew</p>
            <div class="stew photo"></div> 
            <p>Price: 85 gold coins</p>
        </div>
        <div class="element">
            <p>Candied Jester's Coins</p>
            <div class="jester photo"></div>
            <p>Price: 50 gold coins</p>
        </div>
    </div>
    `
}