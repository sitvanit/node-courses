import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
            });
        })
        // reduce gets a function that gets the previous value (arr) the current value (element), and the initial value ([])
        // we use reduce to flatten the nested array from above
        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
