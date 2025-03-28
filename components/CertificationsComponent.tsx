"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Github, Star } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Define the portfolio item type based on the expected API response
interface PortfolioItem {
    id: string | number
    title: string
    short_description: string
    image_url?: string
    technologies: string[]
    documents_url: string[]
    liveUrl?: string
    githubUrl?: string
}


export default function CertificationsComponent() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)


    const _renderPDF = (item: any) => {

        return <Worker key={item} workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
                theme={{
                    theme: 'dark',
                }}
                fileUrl={item} />
        </Worker>
    }

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                setLoading(true)
                const response = await axios.get('https://hexagun-web-master-91iq03.laravel.cloud/api/certifications')

                console.log('API Response:', response.data)

                // Handle different response structures
                let items = []
                if (Array.isArray(response.data)) {
                    items = response.data
                } else if (response.data && typeof response.data === 'object') {
                    const possibleArrayProps = ['items', 'data', 'portfolios', 'projects', 'results']

                    for (const prop of possibleArrayProps) {
                        if (Array.isArray(response.data[prop])) {
                            items = response.data[prop]
                            break
                        }
                    }

                    if (items.length === 0) {
                        for (const key in response.data) {
                            if (Array.isArray(response.data[key])) {
                                items = response.data[key]
                                break
                            }
                        }
                    }
                }

                setPortfolioItems(items)
                setError(null)
            } catch (err) {
                console.error("Error fetching portfolio data:", err)
                setError("Failed to load portfolio data from the API")
            } finally {
                setLoading(false)
            }
        }

        fetchPortfolioData()
    }, [])

    if (loading) {
        return <PortfolioCardSkeleton />
    }



    if (error || portfolioItems.length === 0) {
        return (
            <div className="w-full max-w-md mx-auto">
                <CardContainer>
                    <CardBody className="bg-background border-2 border-destructive/20 shadow-lg rounded-xl p-6">
                        <CardItem translateZ="50" className="w-full text-center">
                            <p className="text-destructive mb-4 font-medium">{error || "No portfolio items found"}</p>
                            <Button
                                onClick={() => window.location.reload()}
                                className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                            >
                                <span className="relative z-10">Try Again</span>
                                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Button>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        )
    }

    return (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {portfolioItems.map((item) => (
                <CardContainer key={item.id} className="w-full">
                    <CardBody className="bg-background dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border shadow-md">
                        {/* Featured badge for the first item */}
                        {portfolioItems.indexOf(item) === 0 && (
                            <CardItem
                                translateZ="80"
                                className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
                            >
                                <Star className="h-3 w-3" />
                                <span>FEATURED</span>
                            </CardItem>
                        )}

                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-foreground"
                        >
                            {item.title}
                        </CardItem>

                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-muted-foreground text-sm mt-2 line-clamp-2"
                        >
                            {item.short_description}
                        </CardItem>

                        <CardItem translateZ="100" className="w-full mt-4">

                            {item.documents_url && item.documents_url.map(item => {
                                return _renderPDF(item)
                            })
                            }

                        </CardItem>


                        <CardItem translateZ="80" className="w-full mt-4">
                            <div className="flex flex-wrap gap-1.5">
                                {item.technologies &&
                                    item.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-secondary/70 hover:bg-secondary transition-colors duration-200 text-xs font-medium"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                            </div>
                        </CardItem>

                        <div className="flex justify-between items-center mt-8 w-full">


                            {item.liveUrl && (
                                <CardItem
                                    translateZ={40}
                                    as={Link}
                                    href={item.liveUrl}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                </CardItem>
                            )}

                            {item.githubUrl && (
                                <CardItem
                                    translateZ={40}
                                    as={Link}
                                    href={item.githubUrl}
                                    target="_blank"
                                    className="flex items-center px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    View Code
                                </CardItem>
                            )}
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    )
}

function PortfolioCardSkeleton() {
    return (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="w-full">
                    <div className="bg-background border border-border w-full h-full rounded-xl p-6 shadow-md">
                        <Skeleton className="h-7 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-5/6 mt-1" />
                        <Skeleton className="h-60 w-full mt-4 rounded-xl" />
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {[1, 2, 3].map((j) => (
                                <Skeleton key={j} className="h-5 w-16 rounded-full" />
                            ))}
                        </div>
                        <div className="flex justify-between mt-8">
                            <Skeleton className="h-9 w-28 rounded-xl" />
                            <Skeleton className="h-9 w-28 rounded-xl" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
