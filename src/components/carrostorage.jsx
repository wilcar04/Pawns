import React, { useState } from 'react';
export const allowWindow = () => typeof window !== "undefined"

export const getCarStorageItem = () => {
    if (allowWindow()) return (localStorage.getItem('carro'))
}


export function removeCarStorageItem(valuei) {
    const modifiedFruits = (getCarStorageItem());
    // Encontrar la posición del elemento a reemplazar

    // Si se encuentra el elemento "Apple" en el array
    const cadena = modifiedFruits.replace(valuei, '');
    setCarStorageItemstring(cadena);
  }


export const setCarStorageItem = (item) => {
    if (allowWindow()) localStorage.setItem('carro', JSON.stringify(item))
}
export const setCarStorageItemstring = (item) => {
    if (allowWindow()) localStorage.setItem('carro', (item))
}


