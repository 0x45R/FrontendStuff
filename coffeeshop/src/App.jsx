import './App.css'
import React, {Component} from 'react';
import { IconShare, IconMapPin, IconBrandMastodon, IconMail, IconCoffee, IconArrowDown, IconArrowUp} from '@tabler/icons-react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Card extends Component{
  render(){
    return (
      <div id={this.props.id} className={`p-8 flex gap-4 justify-center h-screen items-center text-2xl flex-wrap-reverse border-b-black relative border-b ${this.props.className}`}>
        {this.props.children}

        { this.props.above &&
          <a href={this.props.above} className="absolute top-8 z-20">
            <IconArrowUp/>
          </a> }

        { this.props.below && 
          <a href={this.props.below} className="absolute bottom-8 z-20">
            <IconArrowDown/>
          </a> }
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render(){
    return (
      <div className="App overflow-x-hidden">
        <header className="p-4 fixed flex justify-between flex-row w-screen z-10">
          <a href="#"><IconCoffee/></a>
          <div className="flex gap-2">
            <a href="#location"><IconMapPin/></a>
            <a><IconShare/></a>
            <a href="#contact"><IconMail/></a>
            <a><IconBrandMastodon/></a>
          </div>
        </header>
        <main>
          <Card className="gap-16 flex-row" below="#location">
            <div className="gap-4 flex justify-center flex-col align-items">
              <p className="text-7xl font-bold">Lorem Cafe</p>
              <p>The ultimate destination for <br/> coffee lovers and creative minds.</p>
              <a href="#location" className="bg-yellow-500 text-yellow-50 p-4 rounded-2xl w-max font-bold flex items-center justify-center flex-row gap-4 hover:bg-yellow-400 transition-all">
                Visit us!
              </a>
            </div>
            <img className="h-1/2 object-contain" src="/coffeecup.webp"/>
          </Card>
          <Card className="flex-col" id="location" below="#screenshots" above="#">
            <p className="text-4xl font-bold">Where are we?</p>
            <p className="max-w-2xl">Looking for the perfect spot to savor a delicious cup of coffee? Look no further than our coffee shop!</p>
            <iframe scrollable="no" className="flex h-1/2 w-full max-w-2xl rounded-2xl" src="https://www.openstreetmap.org/export/embed.html?bbox=20.59249877929688%2C51.84765608216451%2C21.04843139648438%2C52.6147226179558&amp;layer=mapnik"/>
          </Card>
          <Card className="flex-col" id="screenshots" above="#location" below="#contact">
            <p className="text-4xl font-bold">Gallery</p>
            <p className="max-w-2xl">Browse through our gallery of screenshots and get a sneak peek of our cozy, inviting space.</p>
            <Carousel className="max-w-2xl rounded-2xl" showArrows={true} showStatus={false} showThumbs={false}>
                <div>
                  <img src="/firstphoto.webp"/>
                </div>
                <div>
                  <img src="/firstphoto.webp" />
                </div>
            </Carousel>
          </Card>
          <Card className="flex-col" id="contact" above="#screenshots">
            <p className="text-4xl font-bold">Get in touch</p>
            <p className="max-w-2xl">Contact us for any questions or feedback - we're here to make your coffee experience the best it can be!</p>
          </Card>
        </main>
      </div>
    )
  }
}

export default App
