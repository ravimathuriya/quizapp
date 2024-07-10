import React, {useState, useEffect} from 'react'


function Quiz() {

const [fetcheddata, setFetcheddata] = useState([{
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Music",
    question: "Which artist or group did John Lennon consider son(s) of the Beatles?",
    correct_answer: "Jeff Lynne's Electric Light Orchestra",
    incorrect_answers: [
    "The Rolling Stones",
    "Pink Floyd",
    "The Who"
    ]
    },
    {
    type: "multiple",
    difficulty: "hard",
    category: "Celebrities",
    question: "What was the religion of famous singer Freddie Mercury?",
    correct_answer: "Zoroastrianism",
    incorrect_answers: [
    "Paganism",
    "Ashurism",
    "Judaism"
    ]
    },
    {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question: "On which planet does the game Freedom Planet (2014) take place?",
    correct_answer: "Avalice",
    incorrect_answers: [
    "Freedom",
    "Galaxytrail",
    "Shang Mu"
    ]
    },
    {
    type: "multiple",
    difficulty: "hard",
    category: "History",
    question: "What did the abbreviation RMS stand for in the RMS Titanic in 1912?",
    correct_answer: "Royal Mail Ship",
    incorrect_answers: [
    "Royal Majesty Service",
    "Regular Maritime Schedule ",
    "Regulated Maelstrom Sensor"
    ]
    },
    {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question: "Which team won the Tom Clancy's Rainbow Six Siege Invitational Event February 2017 in the PC Category?",
    correct_answer: "Continuum",
    incorrect_answers: [
    "GIFU",
    "Santos Dexterity",
    "eRa Eternity"
    ]
    },
    {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Mathematics",
    question: "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
    correct_answer: "True",
    incorrect_answers: [
    "False"
    ]
    },
    {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "In what year did the Berlin Wall fall?",
    correct_answer: "1989",
    incorrect_answers: [
    "1987",
    "1991",
    "1993"
    ]
    },
    {
    type: "multiple",
    difficulty: "medium",
    category: "Science &amp; Nature",
    question: "Which of these choices is not one of the phases of mitosis?",
    correct_answer: "Diplophase",
    incorrect_answers: [
    "Metaphase",
    "Anaphase",
    "Telophase"
    ]
    },
    {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Film",
    question: "What three movies, in order from release date, make up the Dollars Trilogy?",
    correct_answer: "A Fistful of Dollars, For a Few Dollars More, The Good, the Bad, and the Ugly",
    incorrect_answers: [
    "The Good, the Bad, and the Ugly, For A Few Dollars More, A Fistful of Dollars",
    "For a Few Dollars More, The Good, the Bad, and the Ugly, A Fistful of Dollars",
    "For a Few Dollars More;, A Fistful of Dollars;, The Good, the Bad, and the Ugly"
    ]
    },
    {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "What's the name of the main protagonist in the Legend of Zelda's franchise?",
    correct_answer: "Link",
    incorrect_answers: [
    "Mario",
    "Zelda",
    "Pit"
    ]
    }
    ]);

    const [index, setIndex] = useState(1);
    const [currentques, setcurrentques] = useState("");
    const [options, setoptions] = useState([]);
    const [Selectedoption, setSelectedoption] = useState("");
    const [msg, setMsg] = useState("");
    const [quizdone, setQuizdone] = useState(false);
    const [score, setScore] = useState(0);
    

    const fetchdata = () =>{
        setIndex(index)
        let quest = fetcheddata[index-1].question
        let correct = fetcheddata[index-1].correct_answer;   
        let incorrect = fetcheddata[index-1].incorrect_answers;
        const options = incorrect.toSpliced(Math.floor(Math.random()*(incorrect.length+1)),0,correct)
        setcurrentques(quest)
        setoptions(options)   
        
        
    }

    const handlenext = () =>{
        setIndex(index+1)
        let quest = fetcheddata[index].question
        let correct = fetcheddata[index].correct_answer;   
        let incorrect = fetcheddata[index].incorrect_answers;
        const options = incorrect.toSpliced(Math.floor(Math.random()*(incorrect.length+1)),0,correct)
        setcurrentques(quest)
        setoptions(options)     
        setSelectedoption("")
        
    }
 

    const handleSubmit = () => {
        
        if(Selectedoption===fetcheddata[index-1].correct_answer){
            setMsg("Your answer is correct.")
            setTimeout(() => {
            setScore(score+1)
        }, 1000);  
        }
        else{
            setMsg(`Your answer is incorrect. Correct answer is ${fetcheddata[index-1].correct_answer}`)
        }
        
        setTimeout(() => {
            setMsg("")  
            if(fetcheddata.length>index){
                handlenext()
            }
            
            if(fetcheddata.length===index){
                setQuizdone(true)
            
        }
        }, 1000);  
        
      
        }
        
        
        useEffect (() => {
            fetchdata()
      
        // eslint-disable-next-line
    }, []);


    


    return (
        <div className='container'>
            <h1>Quiz App</h1>

            { !quizdone ? <div className='my-5' id="question">
                <h4>Question {index} <span id='span'>Score: {score}/{index-1} </span></h4>

                <h4>{currentques}</h4>

                <form  id="answers" className='my-3'>
                 {options.map((value)=>{  
                    return(  <div key={Math.random()}  className="form-check">
                  <input className='mx-1 my-2' type="radio" name="option" value={value} onChange={(e)=>setSelectedoption(e.target.value)}/>
                  <label className="form-check-label">{value}</label>
                  </div>)})}
                  <div id='button'>
                  <button disabled={Selectedoption===""} type="button" className="btn btn-primary mt-2 mx-2" onClick={handleSubmit}>
                        SUBMIT
                    </button>
                    </div>
                    </form>

                    {Selectedoption===fetcheddata[index-1].correct_answer?<h2 className="text" style={{fontSize:"25px", textAlign:"center", color:"lightGreen"}}>{msg}</h2>:<h2 className="text-danger" style={{fontSize:"25px", textAlign:"center"}}>{msg}</h2>}
            </div> :   <div className='my-5' style={{textAlign:"center"}}>    
            <h2 className="text"  style={{color:"lightGreen"}}>Thanks for prticipate</h2>
            <h2 className="text" style={{color:"lightGreen"}}>Your Total Score is  {score} out of {fetcheddata.length}</h2>
                       </div> }
            
        </div>
    )
}

export default Quiz
