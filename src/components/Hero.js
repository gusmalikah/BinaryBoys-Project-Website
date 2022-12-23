import Slideshow from "./slide"

function Hero(){
    return(
        <main>
            <div className="info">
                <h1>About Project:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt augue non 
                    sapien dignissim tincidunt. Duis a maximus nunc. Donec sed elit nec orci interdum eleifend quis a arcu.
                    Vivamus laoreet ultricies nibh sit amet efficitur. Cras vitae lacinia sem. Aenean a pharetra lectus, 
                    sit amet vulputate urna. Praesent feugiat congue quam, vitae mattis diam. Donec ac libero et mi suscipit posuere.
                    Sed lacinia massa a fermentum maximus.Integer sed enim eu elit hendrerit tempor. Suspendisse sit scelerisque.
                    Mauris a turpis sapien.  Integer sed enim eu elit hendrerit tempor. Suspendisse sit amet diam eget nisi 
                    mollis faucibus. Sed viverra tincidunt mattis. Maecenas a ligula fermentum, sollicitudin est sit amet, 
                    laoreet erat. Etiam cursus sollicitudin eros eu scelerisque. Mauris a turpis sapien.
                </p>
            </div>
            <div className="slide">
                <Slideshow />
            </div>
        </main>
    )
}
export default Hero