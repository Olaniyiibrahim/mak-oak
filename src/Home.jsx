import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { IoPeople } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
export default function Home() {
    // const [model, setModel] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

        const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
        };
    // function handleCancel(){
    //     setModel(false)
    // }
    return (
        <div onClick={toggleModal}>
            <div className='bg-[url("image/0a3610084c.jpg")] bg-cover bg-no-repeat h-screen'>
                <header className="flex items-center px-36 p-5 justify-between">
                    <img src={"image/Mao-Oak Resources Limited updated.png"} className="w-[100px]" alt="" />
                    <ul className="flex flex-col text-white mt-10 bg-black items-center justify-center py-3 space-y-2 w-[150px]">
                        <li onClick={toggleModal} className="flex space-x-5 p-1"><NavLink to="/" className="flex space-x-1 p-1"><FaHome className="mt-1"/><span>Home</span></NavLink>{
                            !isModalOpen && (
                                <FaBars className="mt-2 text-orange-600" />
                            )
                        }</li>
                        {
                            isModalOpen && (
                                <div className="space-y-2">
                                    <li onClick={toggleModal}><NavLink to="/about" className="flex space-x-1"><IoPeople /><span>About</span></NavLink></li>
                                    <li><NavLink to="/career" className="flex space-x-1"><AiOutlineProduct /><span>Career</span></NavLink></li>
                                    <li> <NavLink to="/" className="flex space-x-1"><VscTools /><span>Service</span></NavLink></li>
                                </div>
                            )
                        }
                    </ul>
                </header>
                <div className="text-center space-y-5 mt-16">
                    <h1 className="border-solid border-8 p-6 text-4xl border-white w-[750px] mx-auto text-white">Welcome to Mao-Oak Resources Limited!</h1>
                    <div className="bg-black/30 text-white w-[600px] mx-auto h-10 p-2 backdrop-blur-4xl ">
                        Discover our innovative solutions tailored to meet your needs.
                    </div>
                    <div className="flex flex-col space-y-3 text-orange-700 w-[900px] mx-auto">
                        <button className="bg-black rounded-md p-2 hover:text-white">
                            |Engineering, Procurement, Construction, Installation & Commissioning(EPCIC) | General Services| (Clickable)
                        </button>
                        <button className="bg-black rounded-md p-2 w-[700px] mx-auto hover:text-white">
                            Fire Protection |Fire Detection | Gas Detection| Fire Systems  (Clickable)
                        </button>
                        <button className="bg-black rounded-md p-2 w-[200px] mx-auto hover:text-white">
                            |Safety| (Clickable)
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex p-3">
                <div className="bg-white w-1/2 p-3 text-left space-y-5">
                <h2 className="font-bold text-2xl text-center">SYNOPSIS</h2>
                    <p>Mao-Oak Resource Ltd incorporated
                        October 2017 Is an EPCIC (Engineering,
                        Construction, Installation, Commissioning) and
                        Procurement powerhouse to many oil and
                        gas/marine operations in the gulf of Guinea.
                    </p>
                    <p>
                        We provide key players with customized
                        turnkey services with project success at the
                        heart of her ambitions, Mao-Oak interconnects
                        her expertise by relying on an agile and flexible
                        operational structure. Hence, we are able
                        to respond to all our clients’ problems and
                        challenges, with the objective of creating
                        value
                    </p>
                </div>
                <img src={"image/02734a87be.jpg"} className="w-1/2" alt="" />
            </div>
            <div className="flex p-3 ">
                <img src={"image/6739e06387.jpg"} className="w-1/2" alt="" />
                <div className="bg-white w-1/2 p-3 text-left space-y-5">
                        <p className="w-[400px] pt-24 pl-7">
                        Since more than 7 years in Nigeria, and
                        with permanent facility in Port-Harcourt,
                        Mao-Oak Resource Ltd combines its
                        multidisciplinary expertise, mobilization
                        capacity on appropriate infrastructures
                        and innovative equipment to provide
                        integrated solutions, always with a local
                        content optimization approach.
                        </p>
                </div>
            </div>
            <div className="text-center mx-auto space-y-5">
                <div className="md:px-36 space-y-3">
                    <h2 className=" font-bold text-4xl text-left text-gray-600">MISSION & VISION</h2>
                    <p className="text-left ">
                        Deliver state-of-the-art Engineering, Procurement and Construction development
                        projects for the oil and gas industry in Nigeria. Lead the development and transfer of
                        technology to participate in the long term growth of local oil and gas industry and
                        human capital. Enable "Made in Nigeria" a target to reach for a balanced business
                        between all partners involved. <br />
                        Mao-Oak’s core values are:
                    </p>
                </div>
                <div className="flex md:flex-row flex-col w-full">
                    <div className="flex flex-col items-start px-10 py-3 bg-yellow-600 w-1/2">
                        <li>Our people</li>
                        <li>Safety and environment</li>
                        <li>Client focus</li>
                        <li>Commitment to excellence</li>
                        <li>Community involvement</li>
                    </div>
                    <img src={"image/Engineering, Procurement, Construction, Installation & Commissioning (EPCIC)General Services.jpg"} alt="" className="h-[150px] w-1/2"/>
                </div>
            </div>
            <div className="text-center mx-auto space-y-5">
                <div className="md:px-36 space-y-3 p-3">
                    <h2 className=" font-bold text-4xl text-left">ENGINEERING</h2>
                    <p className="text-left ">
                        At Mao-Oak, we believe that the success of a project starts with its Engineering.
                        It is therefore, that we have invested in talents to ensure that all our fabrication activities
                        will be conducted with best in class engineering.
                    </p>
                    <p className="text-left ">
                        Mao-Oak has developed high-end engineering capabilities over the period of time.
                        Presence of specialist engineers and advanced analysis software on site has enabled us
                        deliver high quality engineering deliverables in short duration.
                    </p>
                </div>
                    <img src={"image/e5af60942b.jpg"} alt="" className="h-[300px] w-full"/>
            </div>
            <div className="text-center mx-auto space-y-5">
                <div className="md:px-36 space-y-3 p-3">
                    <h2 className=" font-bold text-4xl text-left">GENERAL PROCUREMENT</h2>
                    <p className="text-left">
                        (Mao- Oak Resources ensures robust supply chain for your project by adhering to the five
                        rights of procurement: the right quantity, quality, timing, price, and economic advantage.
                        Leveraging our extensive network of manufacturers, we secure materials at competitive
                        prices through optimal channels.
                    </p>
                </div>
                    <img src={"image/0d60f7c086 (1).jpg"} alt="" className="h-[300px] w-full"/>
            </div>
            <div className="space-y-3 pt-3">
                    <p className="md:px-36 space-y-3">
                        We have capabilities to handle: 
                        <span className="font-bold space-x-2">
                            Project Procurement Management, End-to-end Supply
                            Chain Management, Logistics Management and Warehousing Management.
                        </span>
                        <p>We offer a one-stop-solution in materials procurement to our clients in the oil and gas
                        industries in Nigeria and beyond in the following categories:</p>
                    </p>
                <div className="flex md:flex-row flex-col space-y-3">
                    <div className="flex flex-col items-start px-10 py-3 w-1/2">
                        <li>Piping, Fittings, and Flanges</li>
                        <li>Valves, Actuators, Regulators, and Generators</li>
                        <li>Life-Saving Equipment Supply</li>
                        <li>Chemical Supply</li>
                        <li>Marine Vessel Supply</li>
                        <li>HVAC Systems & Chillers.</li>
                        <li>Meters & Regulators.</li>
                        <li>Structural Steel.</li>
                        <li>Instrumentation & Control Engineering</li>
                        <li>Lubricants & Chemicals.</li>
                        <li>Pumps, Compressors and Rotating Equipment.</li>
                        <li>Metering Calibration.</li>
                        <li>Mechanical/Process Equipment</li>
                        <li>Pipeline accessories and Steelworks</li>
                        <li>Hoses and Fluid Handling</li>
                        <li>Separators and filters</li>
                        <li>Gauges and Meters</li>
                        <li>Coatings, resins, paints</li>
                        <li>Lighting and Electrical products</li>
                    </div>
                <img src={"image/86905b2bb5.jpg"} className="w-1/2" alt="" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col text-center mx-auto space-y-5">
                <img src={"image/02734a87be.jpg"} alt="" className="h-[300px] w-1/2"/>
                <div className="md:px-36 space-y-3 p-3 w-1/2">
                    <h2 className=" font-bold text-4xl text-left">FABRICATION</h2>
                    <p className="text-left ">
                        Mao-Oak has developed recognized skills in
                        steel fabrication for Shallow Water and Deep
                        Water Projects
                    </p>
                    <p className="text-left ">
                        Mao-Oak highly qualified personnel is
                        competent to fabricate all type of Offshore
                        structures and has a built-up a welding
                        capability with all type of steel (Carbon steel
                        to Stainless including Duplex, SuperDuplex,
                        and Claded)
                    </p>
                </div>
            </div> 
            <div className="flex md:flex-row flex-col text-center mx-auto space-y-5">
                <div className="md:px-36 space-y-3 p-3 w-1/2">
                    <h2 className=" font-bold text-4xl text-left">EXPERTISE</h2>
                    <p className="text-left ">
                        Mao-Oak offers a large range of fabrication
                        services such as :
                        Subsea Operations:
                    </p>
                    <p className="text-left ">
                        well jumpers, manifolds, subsea trees, stools,
                        riser towers, subsea mudmats, spools,
                        gooseneck, pipeline end terminals, suction
                        piles, umbilicals; tools and technical
                        fabrications specifically developed for
                        extreme condition equipment and structures
                        for all Subsea Operations.
                        We also support our customers on
                        seafastening and logistics operations
                    </p>
                </div>
                <img src={"image/ac629002ee.jpg"} alt="" className="h-[400px] w-1/2"/>
            </div>
            <div className="flex md:flex-row flex-col text-center mx-auto space-y-5">
                <img src={"image/4081b02129.jpg"} alt="" className="h-[400px] w-1/2"/>
                <div className="md:px-36 space-y-3 p-3 w-1/2">
                    <h2 className="font-bold text-4xl text-left">OFFSHORE OPERATIONS:</h2>
                    <p className="text-left ">
                        Mao-Oak offers a wide range of fabrication
                        services dedicated to and including hookup
                        activities and offshore shutdowns. These
                        activities include work preparation,
                        prefabrication, fabrication, electrical and
                        instrumentation technician support,
                        transportation and positioning, mechanical and
                        equipments installation and completion,
                        assembly, testing, sea fastening and
                        maintenance.
                    </p>
                </div>
            </div>
            <div className="text-center mx-auto space-y-5">
                <div className="md:px-36 space-y-3 p-3">
                    <h2 className=" font-bold text-4xl text-left">GENERAL PROCUREMENT</h2>
                    <p className="text-left w-[600px]">
                        With strong participative experience on EPCC contract, skilled manpower labor,
                        maintenance and piping and storage/tank fabrication.Our onshore activities covers
                        the whole cycle project management and works, from engineering to commissioning.
                    </p>
                </div>
                    <img src={"image/b3a55ff650.jpg"} alt="" className="h-[500px] w-full"/>
            </div>
            <div className="text-center mx-auto space-y-5">
                <div className="space-y-3 p-3">
                    <h2 className=" font-bold text-4xl bg-yellow-600  text-center p-2 text-white">ENGINEERING SERVICES:</h2>
                    <h2 className=" font-bold text-4xl text-center">ENGINEERING SERVICES:</h2>
                    <div className="flex flex-col items-start justify-center w-1/2 text-center mx-auto">
                        <li>3 Principal Consultants have 10-15 years experience in greenfield and brownfield projects;</li>
                        <li>Experts in linear and non-linear FE analysis: STAAD, SESAM, SACS, USFOS and Abaqus;</li>
                        <li>Greenfield FEED and detailed design calculations and draughting;</li>
                        <li>Brownfield modifications, repair orders, fitness-for-service assessments;</li>
                        <li>Offshore transport, lift & installation calcs;</li>
                        <li>Subsea template and SURF design calcs.</li>
                    </div>
                </div>
                    <img src={"image/b3a55ff650.jpg"} alt="" className="h-[400px] w-full"/>
            </div>
            <div className="text-center mx-auto space-y-5 border border-b-black">
                <div className="space-y-3 p-3 mx-auto">
                    <h2 className="font-bold text-6xl mx-auto ">MAINTENANCE</h2>
                    <div className="w-1/2 text-left mx-auto">
                        <li>Preparation of Workpacks;</li>
                        <li>Supply of experienced offshore trades personnel (e.g. RAT, welders, riggers, etc.);</li>
                        <li>Fitness-for-purpose engineering;</li>
                        <li>Equipment lift and removal engineering and procedures;</li>
                        <li>FPSO/FLNG hull fabric maintenance and crack repair procedures.</li>
                    </div>
                </div>
                    <img src={"image/fe44595ba0.jpg"} alt="" className="h-[300px] w-full "/>
            </div>
            <div className="flex md:flex-row flex-col text-center mx-auto space-y-5">
                <div className="space-y-3 p-3 text-left w-1/2">
                    <h2 className=" font-bold text-6xl text-left">MECHANICAL/PIPING ENGINEERING</h2>
                    <div className="">
                        <li>2 Principal Consultants have 10-15 years’ experience;</li>
                        <li>Caesar II pipe stress analysis;</li>
                        <li>Piping engineering detailed design;</li>
                        <li>Producing RBI schemes for piping;</li>
                        <li>Brownfield modifications (e.g. designing new spools,etc.).</li>
                        <li>Rotating equipment design and integrity management</li>
                        <li>Mechanical package engineering</li>
                    </div>
                </div>
                    <img src={"image/5f139cf1db.jpg"} alt="" className="h-[300px] w-1/2 "/>
            </div>
            <div className="text-left space-y-5 border border-b-black">
                <div className="mx-auto space-y-3 p-3 ">
                    <h2 className=" font-bold text-6xl mx-auto text-center">OFFSHORE SURVEYS</h2>
                    <div className=" w-1/2 text-left mx-auto">
                        <li>Provision of ROV survey teams (incl. pilot);</li>
                        <li>3 Dimensional Control surveys (in partnership with S3Di, Aberdeen);</li>
                        <li>As-built verification surveys;</li>
                        <li>Corrosion assessments;</li>
                        <li>Conventional “tape measure” surveys.</li>
                    </div>
                </div>
                    <img src={"image/dd374419ef.jpg"} alt="" className="h-[300px] w-full "/>
            </div>
            <div className="text-left space-y-5 border border-b-black">
                <div className="mx-auto space-y-3 p-3 text-left">
                    <h2 className=" font-bold text-6xl text-center p-3">ASSET INTEGRITY MANAGEMENT</h2>
                    <div className="mx-auto w-1/2 text-left">
                        <li>Structural Integrity Management;</li>
                        <li>Risk-based inspection strategy documents;</li>
                        <li>Integrity assessments;</li>
                        <li>Corrosion assessments;</li>
                        <li>Asset life extension studies.</li>
                        <li>Rotating equipment design and integrity management</li>
                        <li>Mechanical package engineering</li>
                    </div>
                </div>
                    <img src={"image/dd374419ef.jpg"} alt="" className="h-[300px] w-full "/>
            </div>
            <div className="text-left space-y-5 border border-b-black">
                <div className="space-y-3 p-3 text-left">
                    <h2 className=" font-bold text-6xl text-center">WELLS & DRILLING ENGINEERING</h2>
                    <div className=" w-1/2 mx-auto text-left">
                        <li>2 Principal Consultants have 10-15 years experience with major operators & oilfield service companies;</li>
                        <li>Design of drilling structures and components;</li>
                        <li>Technical project management of drilling, completions and testing activities;</li>
                        <li>Provision of Blacktrades personnel for operations and commissioning/testing.</li>
                    </div>
                </div>
                    <img src={"image/fe44595ba0.jpg"} alt="" className="h-[300px] w-full "/>
            </div> */}
        </div>
    )
}
