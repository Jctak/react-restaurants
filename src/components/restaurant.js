import React, { Component } from "react";

import RestNames from "./restaurantItem";

const restaurants = {
    mediterranean: {
        "Mediterranean Grill": ["hummus", "tabouli", "dolmas"],
        Yalla: ["hummus wrap", "tabouli wrap", "dolmas"],
        "Nik's": ["spanakopita", "gyro", "dolmas"]
    },
    american: {
        "Chik fil a": ["chicken biscuit", "chicken sandwich", "chicken salad"],
        "Mary Mac's Tea Room": ["biscuit", "fried chicken", "mashed potatoes"],
        "Jersey Mike's": [
            "Big Sandwich",
            "Bigger Sandwich",
            "Most Biggerest Sandwich"
        ]
    },
    mexican: {
        Elmyriachi: ["tacos", "burritos", "cheese dip"],
        "Mezcalito's Cantina": ["tortas", "tamales", "cheese dip"],
        Matador: ["cheese dip", "cheese dip", "cheese dip"]
    }
};

class Restaurant extends Component {
    state = {
        foodList: []
    };

    componentDidMount = () => {
        this.setState({
            foodList: restaurants
        });
    };

    menuHandler = props => {
        this.setState({
            menuList: restaurants[props]
        });
    };

    render() {
        return (
            <>
                <h1>Restaurant Types</h1>
                {Object.keys(this.state.foodList).map((type, index) => (
                    <ul key={`ul-rType-${index}`}>
                        <li key={`li-rType-${index}`}>
                            {type}
                            <RestNames rName={this.state.foodList[type]} />
                        </li>
                    </ul>
                ))}
            </>
        );
    }
}

export default Restaurant;
