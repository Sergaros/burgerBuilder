import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient';

const burger = ()=>{
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            <BurgerIngridient type="cheese"/>
            <BurgerIngridient type="meat"/>
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default burger;
