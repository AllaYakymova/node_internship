"use strict";

// Вывести треугольники в порядке убывания их площади.
// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников
// Примечание:
// • Расчёт площади треугольника должен производится по формуле Герона.
// • Каждый треугольник определяется именами вершин и длинами его сторон.
// • Приложение должно обрабатывать ввод чисел с плавающей точкой:
// {
//   vertices: ‘ABC’,
//   a: 10,
//   b: 20,
//   c: 22.36
// }
function calculateSquareOfTriangle(triangle) {
  let vertices =  triangle.vertices.toLowerCase();
  let a = +triangle[vertices.slice(0,1)];
  let b = +triangle[vertices.slice(1,2)];
  let c = +triangle[vertices.slice(2,3)];
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
}

export default function arrangeTrianglesBySquare(arr) {
  let trianglesMap = new Map();
  let arrangedTriangles = [];
  arr.forEach(triangle => {
    if(validateVerticesNames (triangle)) { // валиадция соотствия имени и названиям сторон
      let square = calculateSquareOfTriangle(triangle);
      if(validateIfNaN(square)) {   // проверка на адекватность треугольника
        trianglesMap.set(triangle, square);
      }
    }
  });
  let res = [...trianglesMap.entries()].sort((a, b) => b[1] - a[1]);
  res.forEach(name => arrangedTriangles = [...arrangedTriangles, name[0].vertices]);
  return arrangedTriangles;
}

function validateVerticesNames (obj) {
  let vertName =  obj.vertices.toLowerCase();
  let vertices = Object.keys(obj).filter(el => el !== 'vertices');
  if(vertices.filter(el => !vertName.includes(el)).length === 0) {
    return true;
  } else {
    console.log({status: 'failed', reason: `Vertices name of ${obj.vertices} contain not existing vertices`});
    return false
  }
}

function validateIfNaN(x) {
  return Number.isNaN(+x) ? console.log({status: 'failed', reason: `Check the triangle for adequacy was failed`}) : true
}




