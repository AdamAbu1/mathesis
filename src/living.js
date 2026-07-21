// Living portraits: pre-rendered chalk-sketch loops for persona conversations.
// Each registered figure ships public/living/<id>-idle.mp4 and
// public/living/<id>-speaking.mp4 (animated from the chalk portrait; originals
// archived outside the repo). Register ids as clips land — M3/M4.
export const LIVING = new Set([])

export const livingSrc = (id, kind) => `living/${id}-${kind}.mp4`
