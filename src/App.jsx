import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://media.discordapp.net/attachments/919866299012775936/1220078261271269447/092.png?ex=660da16d&is=65fb2c6d&hm=b0fc98ce02d1113693084127fadfd551b1dac3a813f08c4e039820c743f0ea3d&=&format=webp&quality=lossless&width=437&height=437" />

        <Title title="Wiwat Oumwan (Jaae)">
          <h3>ตำแหน่ง : Programmer</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/12/29").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66992320166
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202092@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>มีความสนใจในการเขียนโปรแกรม ตัดต่อภาพและวิดีโอ เขียนเว็บ และเทคโนโลยีต่างๆ</p>
        </Title>

        <Title title="Work Experience">
          <p>โปรเจค IOT เครื่องตรวจวัดชีพจร ตัดต่อวิดีโอบนโซลเซียลมีเดีย เขียนเว็บไซต์ด้วยภาษา HTML</p>
        </Title>

        <Title title="Skills">
          <p>HTML / JAVA / python</p>
          <p>Microsoft</p>
          <p>มีความคิดสร้างสรรค์</p>
          <p>มีระเบียบ วินัยในตัวเอง</p>
          <p>เรียนรู้ได้อย่างรวดเร็ว</p>
          <p>Wordpress</p>
          <p>photoshop</p>
          <p>Video Editor</p>
        </Title>
      </div>
    </main>
  )
}

export default App
