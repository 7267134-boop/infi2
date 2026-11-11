// Helper plotting function that evaluates a true JS mathematical function
function plot(fn, xMin, xMax, yMin = null, yMax = null, nPts = 45) {
    const pts = [];
    let calcMinY = Infinity, calcMaxY = -Infinity;
    for (let i = 0; i <= nPts; i++) {
        const x = xMin + (xMax - xMin) * (i / nPts);
        let y = fn(x);
        if (!isFinite(y) || isNaN(y)) y = 0;
        pts.push({ x, y });
        if (y < calcMinY) calcMinY = y;
        if (y > calcMaxY) calcMaxY = y;
    }
    const effMinY = yMin !== null ? yMin : calcMinY;
    const effMaxY = yMax !== null ? yMax : calcMaxY;
    const rangeY = effMaxY === effMinY ? 1 : (effMaxY - effMinY);

    const svgPts = pts.map(p => {
        const sx = 18 + ((p.x - xMin) / (xMax - xMin)) * 80;
        const clampedY = Math.max(effMinY, Math.min(effMaxY, p.y));
        const sy = 78 - ((clampedY - effMinY) / rangeY) * 62;
        return { x: sx.toFixed(1), y: sy.toFixed(1) };
    });

    const pathD = 'M ' + svgPts.map(p => p.x + ',' + p.y).join(' L ');
    const areaD = pathD + ' L ' + svgPts[svgPts.length - 1].x + ',78 L ' + svgPts[0].x + ',78 Z';
    return { pathD, areaD };
}

module.exports = { plot };
