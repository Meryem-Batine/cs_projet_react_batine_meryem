import "./contacto.scss"
export const Contactinfo=()=>
{
    return(<>
    <div className="contacto container">


        <div className="map">
            <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26586.506912759807!2d-7.54915255336137!3d33.597172943196426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc9b5ed39c01%3A0x4db6f1381ccf8d63!2sAIN%20SBAA%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1687454736270!5m2!1sfr!2sma" 
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="message">
            <h2>Send us your message</h2>

            <div className="inputs">
                <input type="text" name="" id="" placeholder="Full Name"/>
                <input type="number" name="" id="" placeholder="Phone Number"/>
                <input type="email" name="" id="" placeholder="Email Adress" />
                <textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
                <button className="rounded-pill bg-black text-white">SEND</button>
            </div>
        </div>
    </div>
    </>)
}