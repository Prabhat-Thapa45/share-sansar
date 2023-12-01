"use client"
import Image from 'next/image'
import {IPO_URL} from './url'
import * as cheerio from 'cheerio'
import axios from 'axios';


export default function Home() {
  // const url = IPO_URL;
  const url="https://www.lipsum.com/"
  axios(url).then(response => {
    const html = response.data;
  
    // Use cheerio to parse the HTML
    const $ = cheerio.load(html);
  
    // Use cheerio's selectors to find the data in the HTML
    const data = $('p').text();
  
    console.log(data);
  }).catch(console.error);
  
  console.log(IPO_URL);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    </main>
  )
}
