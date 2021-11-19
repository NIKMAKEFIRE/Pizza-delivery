import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={[
          { name: 'популярности', type: 'popular' },
          { name: 'цене', type: 'price' },
          { name: 'алфавит', type: 'alphabet' }
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map(obj => (
            // <PizzaBlock key={obj.id} name={obj.name} price={obj.price} imageUrl={obj.imageUrl}/>
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        {/* с помощью map мы перекидываем нужные нам значения в Pizza Block */}
      </div>
    </div>
  );
}

export default Home;
