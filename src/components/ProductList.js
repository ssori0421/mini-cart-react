import React from 'react';

const ProductList = ({ productItems, toggleCart, setCartItems, cartItems }) => {
    // 장바구니에 상품 추가 기능
    // onClick 함수로부터 id를 넘겨 받아서
    const handleAddProduct = (id) => {
        const clickedItem = productItems.find((item) => item.id === id);
        // 장바구니에 처음 담는 아이템인지 확인
        // checkedIdx === -1 : 처음 담는 아이템
        // checkedIdx !== -1 : 중복 아이템
        const checkedIdx = cartItems.findIndex(
            (item) => item.id === clickedItem.id
        );
        if (checkedIdx === -1) {
            const newCartItems = [...cartItems, { ...clickedItem, count: 1 }];
            setCartItems(newCartItems);
        } else {
            const newCartItems = [...cartItems];
            newCartItems[checkedIdx].count += 1;
            setCartItems(newCartItems);
        }
        toggleCart();
    };

    return (
        <>
            {productItems.map(({ id, name, imgSrc, price }) => (
                // handleAddProduct 이벤트 핸들러에 id 넘겨줌
                <article key={id} onClick={() => handleAddProduct(id)}>
                    <div className="rounded-lg overflow-hidden border-2 relative">
                        <img
                            src={imgSrc}
                            className="object-center object-cover"
                            alt={name}
                        />
                        <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                            <div
                                data-productid={id}
                                className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                            >
                                장바구니에 담기
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-4 text-gray-700">{name}</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                        {price.toLocaleString()}
                    </p>
                </article>
            ))}
        </>
    );
};

export default ProductList;
