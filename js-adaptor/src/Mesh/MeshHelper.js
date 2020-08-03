const EnumVertexLayoutUsage =  {
    CUSTOM : 0,
    POSITION : 1,
    NORMAL : 2,
    TANGENT : 3,
    UV0 : 4,
    UV1 : 5,
    UV2 : 6,
    COLOR : 7,
    BONEINDEX : 8,
    BONEWEIGHT : 9,
}

const EnumVertexFormat = {
    INVALID : 0,
    FLOAT : 1,
    FLOAT2 : 2,
    FLOAT3 : 3,
    FLOAT4 : 4,
    BYTE4 : 5,
    BYTE4N : 6,
    UBYTE4 : 7,
    UBYTE4N : 8,
    SHORT2 : 9,
    SHORT2N : 10,
    SHORT4 : 11,
    SHORT4N : 12,
    UINT10_N2 : 13,
}

function getPointDataByUsage(buffer, vertexLayout, usage) {
    if (!buffer) {
        console.log('buffer is not exist!')
    }
    const stride = vertexLayout.stride / 4;
    const config = vertexLayout.getConfigByUsage(usage);
    const offset = config.offset / 4;
    const format = config.format;
    const verticesCount = buffer.length / stride;

    console.log(config)

    const res = [];

    let start;
    for (let i = 0; i < verticesCount; i++) {
        start = buffer[i * stride + offset];

        if (usage === EnumVertexLayoutUsage.POSITION) {
            res.push(new MiniGameAdaptor.Vector3.$ctor2(start, start + 1, start + 2))
        } else if (usage === EnumVertexLayoutUsage.UV0) {
            res.push(new MiniGameAdaptor.Vector2.$ctor1(pStart, pStart + 1))
        }
    }

    return res;
}

export {
    EnumVertexLayoutUsage,
    EnumVertexFormat,
    getPointDataByUsage
}