import type { NextPage } from "next";
import { useData } from "../../hooks/useData";
import { TYPES } from "../../constants";
import { Inventory } from "../../types/inventory";
import {Error, Loading} from "../../components/index"
import styled from "styled-components";

const InventoryPage: NextPage = () => {
    const {data, error} = useData(TYPES[4]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((inventoryData: Inventory) => {
                return (
                <div key={inventoryData.id}>
                    <p>title: {inventoryData.title}</p>
                    <p>category: {inventoryData.category}</p>
                    <p>description: {inventoryData.description}</p>
                    <p>slogan: {inventoryData.slogan}</p>
                    <p>price: {inventoryData.price}</p>
                    <p>stock: {inventoryData.stock}</p>
                    <p>id: {inventoryData.id}</p>
                </div>
                )
            })}
        </div>
    )
}

export default InventoryPage;