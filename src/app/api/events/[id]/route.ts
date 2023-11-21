export async function DELETE(request: Request,  { params }: { params: { id: string } }) {
    return await fetch(`http://localhost:3003/board/${params.id}`, {
        method: 'DELETE',
    })
}