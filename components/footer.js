import Link from "next/link"

function FooterLinks(){
    return (
        <>
            <div className="col-lg mb-1">
                &copy; 2022 <Link href="florgon.space">Florgon</Link>. <i>{"<"}{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}{">"}</i>
            </div>
        </>
    )
}

export default function Footer(){
    return (
        <footer className="bg-light mt-auto fixed-bottom">
            <div className="text-center p-2 border-top">
                <div className="mx-auto row">
                    <FooterLinks/>
                </div>
            </div>
        </footer>
    )
}
