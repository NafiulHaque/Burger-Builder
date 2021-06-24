import BreadTop from "../../../assets/images/top.png";
import BreadBottom from "../../../assets/images/bottom.png";
import BreadSalad from "../../../assets/images/salad.png";
import BreadMeet from "../../../assets/images/meet.png";
import "./ingredient.css";
const Ingredient = props => {
    let ingredient = null;

    switch (props.type) {
        case "bread-bottom":
            ingredient = (
                <div>
                    <img src={BreadBottom} alt="BreadBottom" />
                </div>
            )
            break;
        case "bread-top":
            ingredient = (
                <div>
                    <img src={BreadTop} alt="BreadTop" />
                </div>
            );
            break;
        case "bread-salad":
            ingredient = (
                <div>
                    {" "}
                    <img src={BreadSalad} alt="BreadSalad" />
                </div>
            );

            break;
        case "bread-meat":
            ingredient = (
                <div>
                    <img src={BreadMeet} alt="BreadMeet" />
                </div>
            );
            break;
        default:
            ingredient = null;
    }

    return <div className="Ingredient">{ingredient}</div>;
};

export default Ingredient;
