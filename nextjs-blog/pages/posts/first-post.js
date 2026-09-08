//imports all of the important stuff
import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/layout";

//function that builds the main body of the page 
//contains a header and link to send you back home
export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>

            </Head>

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}