import Link from 'next/link'

export default function Home() {
  return (<>
    <div className="display-1">Error logging service for developers.</div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>About</h2>
            <p><b>Gatey</b> - is error loging service for developers that allows you to collect and analyse your application crash reports and problems. Gatey provides simple web interface with dashboard for working with errors and analysing them, and also developer API for adding Gatey inside your application.</p>
            <Link href="/dashboard"><a className="btn btn-outline-secondary shadow">Dashboard</a></Link>&nbsp;
            <Link href="https://dev.florgon.space/gatey"><a className="btn btn-outline-secondary shadow">Documentation (API)</a></Link>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-lg ml-lg-5 text-center mb-3">
            <h2>Have any questions?</h2>
            <p>Contact support and ask any question that you want.</p>
            <Link href={`mailto: ${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}><a className="btn btn-outline-secondary shadow">{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a></Link>
        </div>
    </div>
  </>)
}