import React from 'react'

export default function About(props) {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About TextUtils
            </button>
          </h5>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            Welcome to TextUtils, your one-stop destination for seamless text manipulation. Whether you're a writer, a coder, or simply someone looking to declutter a piece of text, our range of tools is designed with precision to cater to your every need.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button className="btn" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Features
            </button>
          </h5>
        </div>
        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            1.Whitespace Removal: Extra spaces, tabs, and new lines cluttering up your document? Our tool will help you get a crisp, clean version of your text.
            <br /><br />
            2.Punctuation Cleaner: Over-punctuated or inconsistent punctuation can make your text hard to read. Clean it up with our punctuation remover.
            <br /><br />
            3.Character Count: Get a quick count of characters in your text. This is perfect for those who are looking to fit text within certain limitations, like social media posts.
            <br /><br />
            4.Word Count: For writers and students, get a quick tally of how many words you've penned down.
            <br /><br />
            5.Case Converters: Convert your entire text into UPPERCASE, lowercase, Title Case, or Sentence case with just one click.
            <br /><br />
            ...and many more tools tailored for your every text manipulation need!
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              Why Choose TextUtils?
            </button>
          </h5>
        </div>
        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
            1.Accuracy: Our algorithms ensure that your text is modified with utmost accuracy.
            <br /><br />
            2.Privacy: We value your privacy. All text processing is done in real-time, and we don't store your text.
            <br /><br />
            3.Speed: With a user-friendly interface and swift processing, you can get your desired output in seconds.
            <br /><br />
            4.Free to Use: TextUtils is a free service, making high-quality text processing available to all.
            <br /><br />
            Join the community of users who've made their text processing simpler and faster with TextUtils. Dive in and experience text manipulation like never before!
          </div>
        </div>
      </div>
    </div>
  )
}
