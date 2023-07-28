import "./cards.scss"
import bebe from "../../../assets/images/0760168251_1_1_1.jpg"
import femme from "../../../assets/images/large-1653915997-c0a418c8252a31fd663ea0aa7700f5ac.jpg"
import homme from "../../../assets/images/Kindermodellenbureau-Kidzmanagement-modellenbureau-kind-baby-model-Jonah-zara-kids-13-765x1024.jpg"
export const Carte=()=>
{
    return(
        <>
        <div className="cartes">
            <div className="carte">

                <div className="cart">
                    <img src={bebe} alt="" />
                    <div className="btn">
                        <button>COMING SOON</button>
                    </div>
                </div>


                <div className="cart">
                <img src={femme} alt="" />
                <div className="btn">
                        <button>COMING SOON</button>
                    </div>
                    </div>


                    <div className="cart">
                    <img src={homme} alt="" />
                    <div className="btn">
                        <button>COMING SOON</button>
                    </div>
                    </div>


            </div>
        </div>
        </>
    )
}