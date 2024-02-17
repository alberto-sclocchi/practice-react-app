import logo from "./logo.svg";
import "./App.css";
import InfoBox from "./components/InfoBox";
import IntroBox from "./components/IntroBox";	
import HomeInfo from "./components/HomeInfo";

function App() {
	// write code here
	const divImg = {
		img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU",
		img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmZB67e6esDKyxIUTnQhNmOvexujNJ3pccQ&usqp=CAU",
		containerClass: "div-img"
	}

	const homeInfo = {
		name: "react-app",
		introParagraph: "Hi, this a new react App",
		button: "Welcome",
		containerClass: "home-info"
	}

	const infoBoxData = [
		{
			img: "/noImg",
			info: "Info Box Info",
		},
		{
			title: "2nd Title",
			info: "Info Box Info",
		},
		{
			title: "3rd Title",
			img: "/noImg",
			info: "Info Box Info",
		},
		{
			title: "4th Title",
			img: "/noImg",
		},
	];

	const data = {
		title: "NO TITLE HERE",
		img: "/noImg",
		info: "NO TITLE INFO BOX",
	};

	const displayInfoBox = () => {
		return infoBoxData.map((elem, i) => {
			// return !!elem.title ? <InfoBox {...elem} /> : <InfoBox {...data} />;
			return !!elem.title && <InfoBox key={i} {...elem} />;
		});
	};

	return (
		<div className="App">
			<div>
				<IntroBox {...divImg} />
				<HomeInfo {...homeInfo} />
			</div>

			<div>
				{/* <InfoBox blah={""} />
				<InfoBox goober={"another type of booger"} />
				<InfoBox title={"3rd Box"} img={"/noImage"} info={"my info"} />
				<InfoBox {...data} /> */}
				{displayInfoBox()}
			</div>
		</div>
	);
}

export default App;
