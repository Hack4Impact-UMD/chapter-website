import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./memberbox.module.css"
import style from "../../App.css"

// Format of each member is: [Name, Team + Special position if any, Title (like software engineer, co-founder, etc), link to headshot]
// This is formatted with tabs to be easier to read and more quickly detect if there are any errors in data entry. It's kind of ugly to 
// have this much manually entered data at the top, so if there's a better way to do this please tell me!
// Also, this is connected to a map function that provides everyone who does not yet have their pic uploaded with a placeholder image
const allMembers = [
    ['Abbie Tran',          'UMD Website Team (PM)',            'UMD Chapter Co-Founder',               'abbietran.jpg'],
    ['Lydia Hu',            'WISE-E Team (PM)',                  'UMD Chapter Co-Founder',               'lydiahu.png'],
    ['Simin Li',            'ECODistricts Team (PM)',           'UMD Chapter Co-Founder',               'siminli.PNG'],
    ['Alisha Varma',        'UMD Website Team (Tech Lead)',     'Client Outreach',                      'alishavarma.png'],
    ['Jason Maa',           'WISE-E Team (Tech Lead)',           'Software Engineer',                    'jasonmaa.jpg'],
    ['Rajashow Parajuli',   'ECODistricts Team (Tech Lead)',    'Software Engineer',                    'rajashowparajuli.PNG'],
    ['Anna Feng',           'CaDC Water Rebates Team (Tech Lead)','Software Engineer',                   'AnnaFeng.png'],

    ['Hana Zherka',         'Arcadia Team',                     'Software Engineer',                    'HanaZherka.png'],
    ['Miranda Song',        'Arcadia Team',                     'Software Engineer',                    'MirandaSong.png'],
    
    ['Alexis Johnson',      'CaDC Data Parser Team',            'UI/UX Designer',                        'AlexisJohnson.jpg'],
    ['Rachel Wu',           'CaDC Data Parser Team',            'Software Engineer',                    'RachelWu.jpg'],

    ['Daneil Nguyen',       'WISE-E Team',                       'Software Engineer',                    'daneilnguyen.jpg'],
    ['Shivanee Arun',       'WISE-E Team',                       'Software Engineer',                    'arunshivanee.jpg'],
    ['Nate Mekonnen',       'WISE-E Team',                       'Software Engineer',                    'natnaelmekonnen.jpg'],
    ['Elizabeth Chen',      'WISE-E Team',                       'UI/UX Designer',                       'elizabethchen.png'],

    ['Sammy Munta',         'ECODistricts Team',                'UI/UX Designer',                       ''],
    ['Jessica Le',          'ECODistricts Team',                'Software Engineer',                    'jessicale.jpg'],
    ['Shania Kamara',       'ECODistricts Team',                'Software Engineer',                    ''],
    ['Yashas Lokesh',       'ECODistricts Team',                'Software Engineer',                    'yashas.jpeg'],
    ['Eileen Wang',         'ECODistricts Team',                'UI/UX Designer',                       'eileenwang.jpg'],

    ['Daniel Wei',          'Inspire and Empower Team',         'Software Engineer',                    'DanielWei.jpg'],
    
    ['Ananya Nadig',        'UMD Website Team',                 'Sofware Engineer',                     'AnanyaNadig.jpg'],
    ['Aryan Das',           'UMD Website Team',                 'Software Engineer',                    'AryanDas.png'],
    ['Esha Kapoor',         'UMD Website Team',                 'Software Engineer',                    'EshaKapoor.jpg'],
    ['Harleen Kaur',        'UMD Website Team',                 'Software Engineer',                    'HarleenKaur.jpg'],
    ['Nikhil Ghate',        'UMD Website Team',                 'Software Engineer',                    'NikhilGhate.jpg'],
    ['Andy Qu',             'UMD Website Team',                 'Software Engineer',                    'andyqu.png'],
    ['Tahmid Hannan',       'UMD Website Team',                 'Software Engineer',                    ''],
    ['Christy Yau',         'UMD Website Team',                 'Software Engineer',                    'Christy_Yau.jpg'],
    ['Surabi Ramamurthy',   'UMD Website Team',                 'Software Engineer; Client Outreach',   'surabir.jpg'],
    ['Joseph Davies',       'UMD Website Team',                 'Software Engineer',                    'josephdavies.jpg'],
    ['Ferzam Mohammad',     'UMD Website Team',                 'Software Engineer',                    'MohammadFerzam.jpeg'],
    ['Amanda Liu',          'UMD Website Team',                 'Software Engineer; Client Outreach',   'Amanda_Liu.jpg'],
    ['Mohini Dutta',        'UMD Website Team',                 'Software Engineer',                    'MohiniDutta.jpg'],
    ['Katherine Wang',      'UMD Website Team',                 'Software Engineer',                    'KatherineWang.jpg'],
    ['Mohammed Kabir',      'UMD Website Team',                 'Software Engineer',                    ''],
    ['Vrundal Shah',        'UMD Website Team',                 'Software Engineer',                    'VrundalShah.jpg']
    
].map(element => element[3] === '' ? [element[0], element[1], element[2], 'unknown.png'] : element);

// The function importAll and the call to it are ripped straight from StackOverflow:
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./memberpics', false, /\.(png|PNG|JPG|jpe?g|svg)$/));  

class About extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section id={styles.aboutcontent} style = {{marginTop: '6em', marginBottom: '5%', marginLeft: '15%', marginRight: '15%'}}>
                <div style={{marginBottom: '3em', color: 'white'}}>
                    <h1 style = {{color: 'black'}}>What is Hack4Impact-UMD?</h1>
                    <p style={{marginLeft: '5em', marginRight: '5em'}}>Hack4Impact-UMD is a group of University of Maryland students who work with local and national non-profits to create software that improves the world around us. We also dicuss ethical technology, have talks about using technology for social good, and have fun! This club was founded in 2020 and is a chapter of the Hack4Impact, a national 501(c)3 organization.</p>
                </div>
                <div id = {styles.members}>
                        <h1 style={{marginTop: '0.5em', marginBottom: '0.5em'}}>Our Members</h1>
                        <div className={styles.membergrid}>
                            {allMembers.map(element => 
                                <div className={styles.membergriditem} style={{backgroundImage: `url(${images[element[3]]})`}}>
                                    <p><b>{element[0]}</b><br/> 
                                    {element[1]}<br/>
                                    {element[2]}</p>
                                </div>
                            )} 
                        </div>
                </div>
            </section>
        );
    }
}

export default About;