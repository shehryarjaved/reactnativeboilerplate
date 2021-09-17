import { View ,Text, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import * as Progress from 'react-native-progress';
import { useSafeArea } from "react-native-safe-area-context";
function Quiz({navigation}){
    const state = useSelector(state => state);
    const [count , setCount] = useState(0)
    const [score , setScore] = useState(0);
    const [ans , setAns] = useState('')
    console.log("score===>",score)
    console.log("count===>",count)
    console.log("ans===>",ans)
    state.result = score;
    console.log(state.result)
    const result = ()=>{
        setCount(0)
        // navigation.navigate('Result')
    }
    return(
        <View style={{flex:1,backgroundColor:'#6066D0'}}>
           <TouchableOpacity style={{width:'20%',borderBottomEndRadius:20,borderTopEndRadius:20,alignItems:'center',justifyContent:'center',marginTop:10,padding:13,backgroundColor:'#FCA82F'}} onPress={()=> navigation.navigate("Login")}
           ><Text style={{fontSize:13}}>Cancel</Text>
           </TouchableOpacity>
           <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:-10}}>
              <View style={{width:'80%',paddingTop:60}}>
              <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Question {count+1}/{state.quiz.length}</Text>
               <Progress.Bar style={{marginTop:10}} color="#FCA82F" progress={.2*(count+1)} width={57*state.quiz.length} />
              </View>
           </View>
             <View style={{flex:8,alignItems:'center',justifyContent:'center'}}>
            <View style={{padding:20,width:'80%',backgroundColor:'white',height:480,borderRadius:20,alignItems:'center'}}>
       <Text style={{fontSize:20,color:'#6066D0',fontWeight:'bold',fontSize:18}}>{state.quiz[count].question}</Text>
       <View style={{width:"100%",paddingTop:20}}>
            {state.quiz[count].answer.map((v,i)=>{
            return(
                <TouchableOpacity onPress={()=> setAns(v)} key={i} style={{alignItems:'center',justifyContent:'center',borderRadius:15,borderWidth:1,borderColor:'rgb(172, 186, 202)',backgroundColor:'white',width:"100%",marginTop:15,padding:15,}}>
                    <Text style={{fontWeight:'bold'}}>{v}</Text>
                </TouchableOpacity>
            )
        })}
       </View>
        <View style={{width:'100%',flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
        <TouchableOpacity style={{borderRadius:20,width:"50%",alignItems:'center',justifyContent:'center',padding:13,backgroundColor:'#FCA82F'}} onPress={()=> {
        setCount(count+1);
        if(count === state.quiz.length-1){
            result()
        }
        if(ans === state.quiz[count].correct ){
            setScore(score+1)
        }
    }}><Text style={{fontSize:20}}>Next</Text></TouchableOpacity>
        </View>
            </View>
            </View>
            </View>
        )
    }
    

    export default Quiz;