import image from './assets/image.png'

export const model = [
    {
        type: 'title', value: 'Site constructor on pure js', options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    },

    {type: 'image', value: image, options: {
            styles: {
                padding: '2rem',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Это картинка'
        }},

    {type: 'text', value: 'We buy things we don\'t need, to impress people we don\'t like', options: {
            styles: {
                background: 'linear-gradient(to left, #ff0099, #493240)',
                'font-family': 'KarollaC',
                'text-align': 'center',
                'font-size': '2.5em',
                padding: '1rem',
                color: '#fff',

            }
        }},

    {type: 'columns', value: ['Choose a job you love, and you will never have to work a day in your life.' +
        'Choose a job you love, and you will never have to work a day in your life.'
            , 'Only two things we\'ll regret on deathbed – that we are a little loved and little traveled.',
            'As long as man continues to be the ruthless destroyer of lower living beings he will never know health or peace.' +
            ' For as long as men massacre animals, they will kill each other.'], options: {
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                'font-family': 'KarollaC',
                'font-size': '20px',
                padding: '2rem',
                'font-weight': 'bold',
                color: '#fff'
            }
        }},


]