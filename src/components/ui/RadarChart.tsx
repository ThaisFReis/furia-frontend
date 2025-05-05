"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface RadarChartProps {
  data: { trait: string; value: number }[]
  width?: number
  height?: number
  levels?: number
}

export function RadarChart({ data, width = 300, height = 300, levels = 5 }: RadarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const margin = { top: 40, right: 40, bottom: 40, left: 40 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const radius = Math.min(innerWidth, innerHeight) / 2

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`)

    // Configurações do radar
    const angleSlice = (Math.PI * 2) / data.length
    const maxValue = d3.max(data, (d) => d.value) || 100
    const rScale = d3.scaleLinear().domain([0, maxValue]).range([0, radius])

    // Desenhar círculos de nível
    for (let i = 1; i <= levels; i++) {
      const levelFactor = (radius / levels) * i
      g.append("circle")
        .attr("r", levelFactor)
        .style("fill", "none")
        .style("stroke", "rgba(255, 255, 255, 0.2)")
        .style("stroke-width", "0.5px")
    }

    // Desenhar eixos
    const axis = g.append("g").attr("class", "axis")
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2
      axis
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", radius * Math.cos(angle))
        .attr("y2", radius * Math.sin(angle))
        .style("stroke", "rgba(255, 255, 255, 0.2)")
        .style("stroke-width", "0.5px")

      // Rótulos dos eixos
      axis
        .append("text")
        .attr("class", "legend")
        .text(d.trait)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("x", (radius + 20) * Math.cos(angle))
        .attr("y", (radius + 20) * Math.sin(angle))
        .style("font-size", "10px")
        .style("fill", "#fff")
    })

    // Desenhar área do radar
    const radarLine = d3
      .lineRadial<any>()
      .curve(d3.curveLinearClosed)
      .radius((d: any) => rScale(d.value))
      .angle((d: any, i: number) => angleSlice * i - Math.PI / 2)

    g.append("path")
      .datum(data)
      .attr("class", "radar-area")
      .attr("d", radarLine)
      .style("fill", "rgba(255, 204, 0, 0.3)")
      .style("stroke", "#FFCC00")
      .style("stroke-width", "1.5px")

    // Adicionar pontos
    g.selectAll(".radar-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "radar-circle")
      .attr("r", 4)
      .attr("cx", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("cy", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
      .style("fill", "#FFCC00")

    // Adicionar valores
    g.selectAll(".radar-value")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "radar-value")
      .text((d) => `${d.value}%`)
      .attr("x", (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .style("fill", "#fff")
  }, [data, height, levels, width])

  return <svg ref={svgRef} />
}