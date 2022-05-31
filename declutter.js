const textElement = document.getElementById('text');
const optionElement = document.getElementById('options');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const maybe = document.getElementById('maybe');
const thing = document.getElementById('thing');
const book = document.getElementById('book');
const clothing = document.getElementById('clothing');
const paper = document.getElementById('paper');
const again = document.getElementById('again');
const tool = document.getElementById('tool');
const sentimental = document.getElementById('sentimental');
const other = document.getElementById('other');
const official = document.getElementById('official');
const notes = document.getElementById('notes')

function declutter() {
    showPrompt(prompt[0]);
}

function showPrompt(promptIndex) {
    textElement.innerText = promptIndex.text;
    showOptions(promptIndex);
}

function showOptions(promptIndex) {
    promptIndex.option.forEach(option => {
        option.text.style.display = 'inline-block';
        option.text.addEventListener('click', () => nextPrompt(option));
    })
    
}

function resetAnswers() {
    const buttons = [...optionElement.children];
    buttons.forEach(button => {button.style.display = 'none'});
}

function nextPrompt(option) {
    resetAnswers();
    answer = option.nextStep;
    showPrompt(prompt[answer])
}

const prompt = [
    {
        step: 0,
        text: 'What is it?',
        option: [
            {
                text: clothing,
                nextStep: 1 
            },
            {
                text: thing,
                nextStep: 21
            },
            { 
                text: book,
                nextStep: 28
            }, 
            {
                text: paper,
                nextStep: 42
            }
        ]
    },
    {
        step: 1,
        text: 'Have you worn it in the last 6 months?',
        option: [
            {
                text: yes,
                nextStep: 2
            },
            {
                text: no,
                nextStep: 13
            }
        ]
    },
    {
        step: 2,
        text: 'Does it look good?',
        option: [
            {
                text: yes,
                nextStep: 3
            },
            {
                text: no,
                nextStep: 9
            }
        ]
    },
    {
        step: 3,
        text: 'Does it Spark Joy?',
        option: [
            {
                text: yes,
                nextStep: 4
            },
            {
                text: no,
                nextStep: 5
            },
            {
                text: maybe,
                nextStep: 8
            }
        ]
    },
    {
        step: 4,
        text: 'Keep it!',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 5,
        text: 'Do you know someone who DEFINITELY wants it?',
        option: [
            {
                text: yes,
                nextStep: 6
            },
            {
                text: no,
                nextStep: 7
            }
        ]
    },
    {
        step: 6,
        text: 'Give it to them.',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 7,
        text: 'Throw it away!',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 8,
        text: 'Let\'s come back to this later.',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 9,
        text: 'Can you return it?',
        option: [
            {
                text: yes,
                nextStep: 10
            },
            {
                text: no,
                nextStep: 11
            }
        ]
    },
    {
        step: 10,
        text: 'Return it already!',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 11,
        text: 'Is it "disposable"?',
        option: [
            {
                text: yes,
                nextStep: 7
            },
            {
                text: no,
                nextStep: 12
            }
        ]
    },
    {
        step: 12,
        text: 'Donate it!',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 13,
        text: 'Put it on. Does it fit?',
        option: [
            {
                text: yes,
                nextStep: 2
            },
            {
                text: no,
                nextStep: 14
            }
        ]
    },
    {
        step: 14,
        text: 'Is it sentimental?',
        option: [
            {
                text: yes,
                nextStep: 15
            },
            {
                text: no,
                nextStep: 18
            }
        ]
    },
    {
        step: 15,
        text: 'Is it from a special event?',
        option: [
            {
                text: yes,
                nextStep: 4
            },
            {
                text: no,
                nextStep: 16
            }
        ]
    },
    {
        step: 16,
        text: 'Was it expensive?',
        option: [
            {
                text: yes,
                nextStep: 17
            },
            {
                text: no,
                nextStep: 18
            }
        ]
    },
    {
        step: 17,
        text: 'Have you worn it in the past year?',
        option: [
            {
                text: yes,
                nextStep: 4
            },
            {
                text: no,
                nextStep: 18
            }
        ]
    },
    {
        step: 18,
        text: 'Is it broken, torn, or stained?',
        option: [
            {
                text: yes,
                nextStep: 19
            },
            {
                text: no,
                nextStep: 11
            }
        ]
    },
    {
        step: 19,
        text: 'Can you fix it easily?',
        option: [
            {
                text: yes,
                nextStep: 20
            },
            {
                text: no,
                nextStep: 7
            }
        ]
    },
    {
        step: 20,
        text: 'Will you fix it?',
        option: [
            {
                text: yes,
                nextStep: 8
            },
            {
                text: no,
                nextStep: 7
            }
        ]
    },
    {
        step: 21,
        text: 'What kind of thing?',
        option: [
            {
                text: tool,
                nextStep: 22
            },
            {
                text: sentimental,
                nextStep: 3
            },
            {
                text: other,
                nextStep: 3
            }
        ]
    },
    {
        step: 22,
        text: 'Does it work?',
        option: [
            {
                text: yes,
                nextStep: 23
            },
            {
                text: no,
                nextStep: 25
            }
        ]
    },
    {
        step: 23,
        text: 'Do you have more?',
        option: [
            {
                text: yes,
                nextStep: 24
            },
            {
                text: no,
                nextStep: 4
            }
        ]
    },
    {
        step: 24,
        text: 'Keep the better one.',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 25,
        text: 'Can you fix it?',
        option: [
            {
                text: yes,
                nextStep: 26
            },
            {
                text: no,
                nextStep: 7
            }
        ]
    },
    {
        step: 26,
        text: 'Do you have more?',
        option: [
            {
                text: yes,
                nextStep: 7
            },
            {
                text: no,
                nextStep: 27
            }
        ]
    },
    {
        step: 27,
        text: 'Fix it and keep it!',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    },
    {
        step: 28,
        text: 'Is the book new?',
        option: [
            {
                text: yes,
                nextStep: 29
            },
            {
                text: no,
                nextStep: 38
            }
        ]
    },
    {
        step: 29,
        text: 'Was it a gift?',
        option: [
            {
                text: yes,
                nextStep: 30
            },
            {
                text: no,
                nextStep: 36
            }
        ]
    },
    {
        step: 30,
        text: 'Do you think you\'ll like it?',
        option: [
            {
                text: yes,
                nextStep: 31
            },
            {
                text: no,
                nextStep: 33
            }
        ]
    },
    {
        step: 31,
        text: 'Is it essential to your collection?',
        option: [
            {
                text: yes,
                nextStep: 32
            },
            {
                text: no,
                nextStep: 35
            }
        ]
    },
    {
        step: 32,
        text: 'Do you have more than one?',
        option: [
            {
                text: yes,
                nextStep: 33
            },
            {
                text: no,
                nextStep: 4
            }
        ]
    },
    {
        step: 33,
        text: 'Is it special in some way?',
        option: [
            {
                text: yes,
                nextStep: 4
            },
            {
                text: no,
                nextStep: 34
            }
        ]
    },
    {
        step: 34,
        text: 'Is it damaged?',
        option: [
            {
                text: yes,
                nextStep: 7
            },
            {
                text: no,
                nextStep: 12
            }
        ]
    },
    {
        step: 35,
        text: 'Do you have the eBook?',
        option: [
            {
                text: yes,
                nextStep: 33
            },
            {
                text: no,
                nextStep: 4
            }
        ]
    },
    {
        step: 36,
        text: 'Was it expensive?',
        option: [
            {
                text: yes,
                nextStep: 31
            },
            {
                text: no,
                nextStep: 37
            }
        ]
    },
    {
        step: 37,
        text: 'Can you get it at the library?',
        option: [
            {
                text: yes,
                nextStep: 33
            },
            {
                text: no,
                nextStep: 4
            }
        ]
    },
    {
        step: 38,
        text: 'Have you read it already?',
        option: [
            {
                text: yes,
                nextStep: 39
            },
            {
                text: no,
                nextStep: 40
            }
        ]
    },
    {
        step: 39,
        text: 'Will you read it again?',
        option: [
            {
                text: yes,
                nextStep: 35
            },
            {
                text: no,
                nextStep: 33
            }
        ]
    },
    {
        step: 40,
        text: 'Will you read it within 5 years?',
        option: [
            {
                text: yes,
                nextStep: 37
            },
            {
                text: no,
                nextStep: 41
            }
        ]
    },
    {
        step: 41,
        text: 'Will someone you know read it?',
        option: [
            {
                text: yes,
                nextStep: 6
            },
            {
                text: no,
                nextStep: 34
            }
        ]
    },
    {
        step: 42,
        text: 'What kind of paper?',
        option: [
            {
                text: sentimental,
                nextStep: 3
            },
            {
                text: official,
                nextStep: 4
            },
            {
                text: notes,
                nextStep: 43
            }
        ]
    },
    {
        step: 43,
        text: 'Scan it/make it digital.',
        option: [
            {
                text: again,
                nextStep: 0
            }
        ]
    }
]

declutter();