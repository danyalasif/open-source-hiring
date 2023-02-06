import Head from 'next/head'

type CompanyData = {
  id: number,
  companyName: string,
  companyImage: string,
  openRoles: number,
  remote: boolean,
  location: string,
  githubSrc: string,
  careersPage: string,
  website: string 
}

const data: CompanyData[] = [
  {
    id: 1,
    companyName: "MUI",
    companyImage: "https://mui.com/",
    openRoles: 10,
    remote: true,
    location: "Remote",
    githubSrc: "https://github.com/mui",
    careersPage: "https://mui.com/careers/",
    website: "https://mui.com/" 
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='m-8 flex flex-col'>
        <div className='p-4 mb-8 bg-red-900 border-blue-900 rounded-xl gap-4 flex flex-col'>
          <h2 className='text-3xl'>What is Open Source Hiring</h2>
          <p>Best way to prove that you can excel in remote work is by contributing to open source</p>
          <p>Go one step forward and work on open source projects that also hire regularly</p>
          <p>Build Connections</p>
          <p>Prove to the rest of the team that they can work with you and vice versa</p>

          <p>This project collects all the open source projects which are hiring remotely</p>
        </div>

        <h3 className='text-xl mb-4'>Companies</h3>
        <div className='flex flex-row w-max'>
          {data.map(item => {
            return <div key={item.id} className='flex flex-col gap-4 p-4 border rounded-xl bg-zinc-800 border-white'>
              <p className='text-center'>{item.companyName}</p>
              <p>Open Roles: {item.openRoles}</p>
              <p>Job Location: {item.remote ? "Remote" : "On-Site"}</p>
              <p>Company Location: {item.location}</p>
              <div className='flex justify-around bg-slate-900 mt-4 p-2'>
                <a href={item.githubSrc} target="_blank" rel="noreferrer" className='hover:underline hover:bg-red-500'>GitHub</a>
                <a href={item.website} target="_blank" rel="noreferrer" className='hover:underline hover:bg-red-500'>Website</a>
                <a href={item.careersPage} target="_blank" rel="noreferrer" className='hover:underline hover:bg-red-500'>Careers</a>

                </div>

            </div>
          })}
        </div>
      </main>
    </>
  )
}
