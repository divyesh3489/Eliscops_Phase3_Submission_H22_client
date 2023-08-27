import React, { useState, useEffect } from 'react'
import Chart from "chart.js/auto";
import Linechart from './Linechart';
import Barchart from './Barchart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function Dashboard() {
    const [site, setSite] = useState('S1');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []);
    const site_j = {
        S1: {
            data1: [65, 59, 80, 81, 56, 55, 40],
            data2: [35, 48, 86, 71, 78, 65, 30],
            Pending: 30,
            Completed: 60,
            Overall: 90


        },
        S2: {
            data1: [56, 99, 10, 81, 26, 85, 50],
            data2: [70, 58, 56, 11, 68, 65, 40],
            Pending: 40,
            Completed: 30,
            Overall: 80
        },
        S3: {
            data1: [55, 89, 56, 74, 23, 45, 23],
            data2: [56, 48, 16, 56, 60, 67, 10],
            Pending: 20,
            Completed: 50,
            Overall: 70
        },


    }
    var data1 = site_j[site].data1
    var data2 = site_j[site].data2
    var pending = site_j[site].Pending
    var completed = site_j[site].Completed
    var overall = site_j[site].Overall
    console.log(site)

    const sitedata = (e) => {
        setSite(e.target.value)
        console.log(site)
        data1 = site_j[site].data1
        data2 = site_j[site].data2
        pending = site_j[site].Pending
        completed = site_j[site].Completed
        overall = site_j[site].Overall

    }

    return (
        <>
            <div className='m-5 bg-white p-5 rounded-md  grid lg:gap-20 gap-5 lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-4'>

                <div className='p-5 bg-orange-500 rounded-md'>

                    <label htmlFor="site" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a Site</label>
                    <select id="site" name='site' onChange={sitedata} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="S1" selected >site1</option>
                        <option value="S2">site2</option>
                        <option value="S3">site3</option>
                    </select>
                </div>
                <div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        {pending}%
                    </div>
                    <div className="mb-1 text-base font-medium text-black-500">Pending product</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: `${pending}%` }}></div>
                    </div>

                </div>

                <div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        {completed}%
                    </div>
                    <div className="mb-1 text-base font-medium text-black-500">Completed product</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: `${ completed }%` }}></div>
                    </div>

                </div><div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        {overall}%
                    </div>
                    <div className="mb-1 text-base font-medium text-black-500">Overall product</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div className="bg-red-700 h-2.5 rounded-full" style={{ width: `${ overall }%` }}></div>
                    </div>

                </div>
            </div>
            <div className=' grid lg:gap-20 gap-5 lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2'>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Linechart label="Efficiency" data={data1} />
                </div>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Linechart label="Pending" data={data2} />
                </div>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Barchart label="Efficiency" />
                </div>
                <div className='m-5 bg-white p-5 rounded-md'>
                    <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Name"></Column>
                        <Column field="description" header="Project"></Column>
                        <Column field="category" header="status"></Column>
                        <Column field="price" header="No. Of Members"></Column>
                        <Column field="quantity" header="Deadline"></Column>
                    </DataTable>
                </div>
            </div>
        </>
    )
}

export default Dashboard